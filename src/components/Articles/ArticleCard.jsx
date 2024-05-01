import "./Articles.css";

const ArticleCard = (props) => {
  return (
    <div className="single_article">
      <img src={props.articleImg} className="articleImg" />
      <h4 className="articleDate"> {props.articleDate} </h4>
      <h3 className="articleTitle"> {props.articleTitle} </h3>
      <p className="articleDetail"> {props.articleDetails} </p>
    </div>
  );
};

export default ArticleCard;
