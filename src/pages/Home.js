import React from "react";
import image from "../image/image2.png";
import image2 from "../image/image1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="firstRow">
        <div className="firstColumn textBlock">
          <h1>Kilka słów o nas</h1>
          <span>Czyli kim jesteśmy i dokąd zmierzamy</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            duinec quam bibendum ornare vitae id libero. Suspendisse potenti.
            Morbiegestas accumsan diam id interdum. Fusce tincidunt tortor eget
            mihendrerit, sed lacinia massa pellentesque. Donec ut suscipit
            mauris. Morbi ut enim ut magna aliquam facilisis vel sed sem. In
            auctor, arcuquis tempor facilisis, risus metus mollis libero, et
            blandit nibh mauris non dolor. Ut velit eros, condimentum vel lectus
            vitae, scelerisque ultrices felis. Maecenas faucibus finibus
            commodo. Curabitur non justo maximus felis aliquam dictum a eu
            turpis. Praesent posuere sagittis diam at sodales. Fusce sit amet
            consequat ipsum, ut auctor nibh. Nulla sit amet diam imperdiet,
            consectetur nunc pellentesque, porta nulla.
          </p>
          <p>
            Pellentesque at magna ipsum. Donec ultrices bibendum eros eu
            pellentesque. Quisque porta ex mi, id ultrices odio fringilla nec.
            Nunc id aliquet lorem. Nunc aliquam risus non ex lobortis, a
            fermentum quam pharetra. Maecenas pharetra massa ac metus luctus
            sollicitudin eget eu turpis. Nunc egestas mattis mattis. Suspendisse
            potenti. Maecenas imperdiet interdum lacus quis vehicula. Donec a
            commodo orci. Donec vel velit eu ipsum rutrum consectetur vel sit
            amet quam.
          </p>
          <Link to="/votes">
            <button>ZOBACZ WIĘCEJ</button>
          </Link>
        </div>
        <div className="secondColumn">
          <img src={image} alt=""></img>
        </div>
      </div>
      <div className="secondRow">
        <div className="firstColumn">
          <img src={image2} alt=""></img>
        </div>
        <div className="secondColumn textBlock">
          <h1>Kilka słów o nas</h1>
          <span>Czyli kim jesteśmy i dokąd zmierzamy</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            duinec quam bibendum ornare vitae id libero. Suspendisse potenti.
            Morbiegestas accumsan diam id interdum. Fusce tincidunt tortor eget
            mihendrerit, sed lacinia massa pellentesque. Donec ut suscipit
            mauris. Morbi ut enim ut magna aliquam facilisis vel sed sem. In
            auctor, arcuquis tempor facilisis, risus metus mollis libero, et
            blandit nibh mauris non dolor. Ut velit eros, condimentum vel lectus
            vitae, scelerisque ultrices felis. Maecenas faucibus finibus
            commodo. Curabitur non justo maximus felis aliquam dictum a eu
            turpis. Praesent posuere sagittis diam at sodales. Fusce sit amet
            consequat ipsum, ut auctor nibh. Nulla sit amet diam imperdiet,
            consectetur nunc pellentesque, porta nulla.
          </p>
          <p>
            Pellentesque at magna ipsum. Donec ultrices bibendum eros eu
            pellentesque. Quisque porta ex mi, id ultrices odio fringilla nec.
            Nunc id aliquet lorem. Nunc aliquam risus non ex lobortis, a
            fermentum quam pharetra. Maecenas pharetra massa ac metus luctus
            sollicitudin eget eu turpis. Nunc egestas mattis mattis. Suspendisse
            potenti. Maecenas imperdiet interdum lacus quis vehicula. Donec a
            commodo orci. Donec vel velit eu ipsum rutrum consectetur vel sit
            amet quam.
          </p>
          <Link to="/votes">
            <button>ZOBACZ WIĘCEJ</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
