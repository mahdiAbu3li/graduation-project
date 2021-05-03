import React from "react";
import ReactImageAnnotate from "react-image-annotate";
import { RegionLabel } from "react-image-annotate";

function TestFarah() {
  return (
    <div>
      <ReactImageAnnotate
        labelImages
        regionClsList={["Alpha", "Charlie", "Delta"]}
        // regionTagList={["tag1", "tag2", "tag3"]}
        // taskDescription="l;akjsdlkj lkj lkj "
        // showTags={false}
        allowComments={true}
        images={[
          {
            src: "https://placekitten.com/408/287",
            name: "Image 1",
            regions: [],
          },
        ]}
        onExit={(MainLayoutState: any) =>
          console.log(MainLayoutState.images[0].regions)
        }
      />
    </div>
  );
}

export default TestFarah;
