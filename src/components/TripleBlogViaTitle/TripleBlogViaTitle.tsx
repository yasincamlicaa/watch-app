import React from "react";
import blog1 from "../../assets/images/blog.png";
import blog2 from "../../assets/images/blog-2.png";
import blog3 from "../../assets/images/blog-3.png";
import "./TripleBlogViaTitle.scss";

interface BlogItem {
  id: number;
  image: string;
  title: string;
  date: string;
  hashtags: string[];
}

interface TripleBlogViaTitleProps {
  title?: string;
}

const TripleBlogViaTitle: React.FC<TripleBlogViaTitleProps> = ({ title }) => {
  const fakeData: BlogItem[] = [
    {
      id: 1,
      image: blog1,
      title:
        "Jan-Jaap Wepster: Horobox İle Birlikte Çalışıyor Olmak Bizim İçin Büyük Bir Onur İçermektedir.",
      date: "23 Aralık 2023",
      hashtags: ["#React", "#TypeScript"],
    },
    {
      id: 2,
      image: blog2,
      title: "İkinci El Rolex Fiyatları (Yeniden) Artar Mı?",
      date: "24 Aralık 2023",
      hashtags: ["#JavaScript", "#Frontend"],
    },
    {
      id: 3,
      image: blog3,
      title: "Breitling Top Time Deus Chronograph II",
      date: "25 Aralık 2023",
      hashtags: ["#WebDevelopment", "#UI/UX"],
    },
    {
      id: 4,
      image: blog1,
      title: 'Breitling Top Time Deus Chronograph II',
      date: '25 Aralık 2023',
      hashtags: ['#WebDevelopment', '#UI/UX'],
    },
    {
      id: 5,
      image: blog2,
      title: 'Breitling Top Time Deus Chronograph II',
      date: '25 Aralık 2023',
      hashtags: ['#WebDevelopment', '#UI/UX'],
    },
    {
      id: 6,
      image: blog3,
      title: 'Breitling Top Time Deus Chronograph II',
      date: '25 Aralık 2023',
      hashtags: ['#WebDevelopment', '#UI/UX'],
    }
  ];

  return (
    <section className="triple-blog-via-title-area">
      <div className="triple-blog-via-title-body">
        <h2>{title}</h2>
        <div className="triple-blog-via-title">
          {fakeData.map((item) => (
            <div className="blog-item" key={item.id}>
              <a href={`/blog/${item.id}`} className="blog-link">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </a>
              <div className="details">
                <div className="hashtags">
                  <a href={`/${item.date}`} className="date">
                    {item.date}
                  </a>
                  {item.hashtags.map((tag, index) => (
                    <a key={index} href={`/#${tag}`} className="hashtag">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripleBlogViaTitle;
