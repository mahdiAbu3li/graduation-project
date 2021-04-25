import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import LoadingUpload from "../DropZone/Loading-upload/Loading-upload";
import lottie from "lottie-web";
import dropeHere from "../../../../assets/drop-zone/drop-here.json";
import "./drop-zone.css";
export default function DropZone() {
  const MySwal = withReactContent(Swal);
  const message: string = "Click to Add\n Or drag and drop a PDF file";
  const dropeHereRef = useRef<HTMLDivElement>(null);
  const dropeZoneContainerRef = useRef<HTMLDivElement>(null);
  const LIMIT = 10000000;
  useEffect(() => {
    lottie.loadAnimation({
      container: dropeHereRef.current!,
      autoplay: true,
      renderer: "svg",
      loop: true,
      animationData: dropeHere,
    });
  }, []);

  const DefualtDrooeZone = () => {
    return (
      <div>
        <pre>{message}</pre>
        <div
          id="upload-here"
          ref={dropeHereRef}
          style={{ width: "15%", marginLeft: "1.5rem" }}
        />
      </div>
    );
  };
  const [dropedFile, setDropedFile] = useState<JSX.Element>(DefualtDrooeZone());

  const uploadFile = async (fileUploaded: any) => {
    let formData = new FormData();
    formData.append("file", fileUploaded);
    // TODO: Add to .env
    formData.append("cloud_name", "dgviin24k");
    formData.append("upload_preset", "ysd8j66q");
    formData.append("public_id", fileUploaded.name.split(".")[0]);

    let res = await fetch(
      "https://api.cloudinary.com/v1_1/dgviin24k/auto/upload",
      {
        method: "post",
        mode: "cors",
        body: formData,
      }
    );

    let json = await res.json();

    return json;
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles[0].size > LIMIT) {
      Swal.fire({
        title: "Ops!",
        html: (
          <pre>
            <b>File Must be less than ${LIMIT / 1000000}MB</b>
          </pre>
        ),
        icon: "error",
      });
    } else if (acceptedFiles[0].type === "hamza") {
      Swal.fire({
        title: "Ops!",
        html: (
          <pre>
            Wrong Type\n pleas add a <b>PDF</b> file insted
          </pre>
        ),
        icon: "error",
      });
    } else {
      showLoading();
      try {
        const { url } = await uploadFile(acceptedFiles[0]);
        setDropedFile(
          <div>
            <img
              style={{ width: "2.5rem", height: "2.5rem" }}
              src={url}
              alt="uploadedImage"
            />
            <pre> </pre>
            <p style={{ fontSize: "1.8rem" }}>{acceptedFiles[0].name}</p>
          </div>
        );
        hideLoading();
      } catch (err) {
        console.log(err);
        hideLoading();
        Swal.fire({
          title: "Ops!",
          html: (
            <pre style={{ fontSize: "1.8rem", fontWeight: 600 }}>
              Something went wrong\nPlease try again
            </pre>
          ),
          icon: "error",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideLoading = () => {
    let temp = document.querySelector(".transparent-background");
    temp!.className = "empty-div";
    temp = document.querySelector(".swal2-container");
    temp!.className = "empty-div";
    MySwal.clickCancel();
    Swal.clickCancel();
  };

  const showLoading = () => {
    MySwal.fire({ showConfirmButton: false, html: <LoadingUpload /> });
    const temp = document.querySelector(".swal2-popup");
    temp!.className = "transparent-background";
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="drop-zoon-container">
      <div {...getRootProps()} ref={dropeZoneContainerRef}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <pre className="active-pre">Drop here !!!</pre>
        ) : (
          dropedFile
        )}
      </div>
    </div>
  );
}
