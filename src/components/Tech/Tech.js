import "./Tech.css";

const Tech = (props) => {
  return (
    <section className="Tech">
      <h3>Technologies</h3>
      <ul className="TechList">
        <li className="TechListItem">
          <span>
            <img
              alt="React"
              src="data:image/png;base64,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"
            />
          </span>
          <h4>React</h4>
          <div className="Skills">
            <article>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful."
            </article>
          </div>
        </li>
        <li className="TechListItem">
          <span>
            <img src="/node.svg" alt="NodeJS" />
          </span>
          <h4>NodeJS</h4>
          <div className="Skills">
            <article>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful."
            </article>
          </div>
        </li>
        <li className="TechListItem">
          <span>
            <img src="/js.svg" alt="JavaScript" />
          </span>
          <h4>JavaScript</h4>
          <div className="Skills">
            <article>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful."
            </article>
          </div>
        </li>
        <li className="TechListItem">
          <span>
            <img src="/mongo.svg" alt="MongoDB" />
          </span>
          <h4>MongoDB</h4>
          <div className="Skills">
            <article>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful."
            </article>
          </div>
        </li>
        <li className="TechListItem">
          <span>
            <img src="/express.svg" alt="Express" />
          </span>
          <h4>Express</h4>
          <div className="Skills">
            <article>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful."
            </article>
          </div>
        </li>
        <li className="TechListItem">
          <span>
            <img src="/Next.svg" alt="Next.js" />
          </span>
          <h4>NextJS</h4>
          <div className="Skills">
            <article>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful."
            </article>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Tech;