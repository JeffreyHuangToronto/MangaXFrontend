import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./Manga.module.css";
import { Link } from "react-router-dom";

const MangaPlaceholder = (props) => {
  const mangaList = props.data;
  const mangaItemList = mangaList.map((manga) => {
    const coverRel = manga.relationships.find((r) => r.type === "cover_art");
    // const mangaTitle = manga.attributes.title.en;
    const imgLink = `https://uploads.mangadex.org/covers/${manga.id}/${coverRel.attributes.fileName}.256.jpg`;

    return (
      <Grid xs={"auto"} key={manga.id}>
        <Link style={{ textDecoration: "none" }} to={`/manga/${manga.id}`}>
          <div className={styles.mangaParent}>
            {/* <article
              className={styles.mangaImage}
              style={{
                backgroundImage: `url(${imgLink})`,
              }}
            >
              <p className={styles.covertitle}>{mangaTitle}</p>
            </article> */}
            <img src={imgLink} alt="manga_image" />
            {/* <p>{mangaTitle}</p> */}
          </div>
        </Link>
      </Grid>
    );
  });

  return <>{mangaItemList}</>;
};

export default MangaPlaceholder;
