import SecHEading from "../general-components/SecHeading";
import ArticleCard from "./ArticleCard";
import "./Articles.css";

const articleCardDetails = [
  {
    id: 1,
    pic: "../../../public/images/articleImg1.svg",
    date: "May 7, 2023",
    title: "Car Rental Hacks for a Smooth Journey",
    details:
      "Learn insider tips for getting the best deals and making the most of your rental car experience.",
  },
  {
    id: 2,
    pic: "../../../public/images/articleImg2.svg",
    date: "May 7, 2023",
    title: "Managing Your Rental Items: A Comprehensive Guide",
    details:
      "Get valuable insights on how to effectively manage and maintain your rented items.",
  },
  {
    id: 3,
    pic: "../../../public/images/articleImg3.svg",
    date: "May 7, 2023",
    title: "Navigating the Rental Market: Insights for New Renters",
    details:
      "Explore key considerations and useful tips for individuals to the rental market.",
  },
  {
    id: 4,
    pic: "../../../public/images/articleImg4.svg",
    date: "May 7, 2023",
    title: "Maximixing Returns: Strategies for Rental Property Owners",
    details:
      "Learn strategies to optimize the return on investment for your rental property.",
  },
];

function createArticleCard(singleArticleCard) {
  return (
    <ArticleCard
      articleImg={singleArticleCard.pic}
      articleDate={singleArticleCard.date}
      articleTitle={singleArticleCard.title}
      articleDetails={singleArticleCard.details}
    />
  );
}

const Articles = () => {
  return (
    <section className="articles_section">
      <SecHEading headingText="Important Articles" />

      <div className="allArticles">
        {articleCardDetails.map(createArticleCard)}
      </div>
    </section>
  );
};

export default Articles;
