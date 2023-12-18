import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="mx-auto max-w-xl py-8">
      <div>
        <h1>About me</h1>
        <br />
        <p>
          Soy un Ingeniero, con pásion por los datos y de como la informació nos
          ayuda a tomar mejores decisiones. Además en desarrollo las habilidades
          de comunicación o contador de historias, porque por lo general soy de
          pocas palabras aunque ya te has dado cuenta de que estoy escribiendo
          un blog.
        </p>
        <br />
        <p>
          Como objetivo creado para esta sección es que puedas conocer un poco
          mas sobre mí y de como quiero transmitir lo que he aprendido con el
          tiempo y de una forma práctica.
        </p>
        <br />
        <p>Algunos de los temas</p>
      </div>
    </div>
  );
};

export default About;
