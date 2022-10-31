import React from "react";
import { useParams } from "react-router-dom";
const MangaInfoPage = (props) => {
  const params = useParams();
  const [manga, setManga] = React.useState();
  const [cover, setCover] = React.useState();

  React.useEffect(() => {
    fetch(`https://mangaxapp.herokuapp.com/api/getMangaInfo/${params.mangaid}`)
      .then((res) => res.json())
      .then((data) => {
        setManga(data.data);
        fetch(
          `/api/getcover/${
            data.data.relationships.find((r) => r.type === "cover_art").id
          }`
        )
          .then((res) => res.json())
          .then((data) => {
            setCover(data.data.attributes.fileName);
          });
      });
  }, [params.mangaid]);

  return (
    <div>
      {!manga && !cover ? (
        <p>Loading</p>
      ) : (
        <>
          <h1>{manga.attributes.title.en}</h1>
          <img
            alt=""
            src={`https://uploads.mangadex.org/covers/${manga.id}/${cover}.256.jpg`}
          />
          <p>{manga.attributes.description.en}</p>
        </>
      )}
    </div>
  );
};

MangaInfoPage.propTypes = {};

export default MangaInfoPage;
