import { Container, Col, Row, Button } from "reactstrap";
import { HUMANIMAGELAYERS } from "../shared/HUMANIMAGELAYERS";
import { DOGIMAGELAYERS } from "../shared/DOGIMAGELAYERS";
import { BACKGROUNDIMAGES } from "../shared/BACKGROUNDIMAGES";
import blankCanvas from "../assets/images/background/blankCanvas.jpg";
import { useState } from "react";
import Thumbnails from "../components/Thumbnails";
import FilterSelection from "../components/FilterSelection";

const CreatePage = () => {
  const [humans, setHumans] = useState({
    gender: "all",
    age: "all",
    bodyLanguage: "all",
    breed: "all",
    tag: "all",
    humanSelection: 0,
    dogSelection: 0,
    BGSelection: 0,
  });

  const {
    gender,
    age,
    bodyLanguage,
    humanSelection,
    dogSelection,
    BGSelection,
  } = humans;

  console.log(
    `Gender: ${gender} \n Age: ${age} \n BodyLanguage: ${bodyLanguage}`
  );

  return (
    <Container>
      <Row className="create-section-1">
        <Col md="6" className="preview-col">
          <Row className="preview-container">
            <img
              src={blankCanvas}
              alt="blank-canvas"
              className="preview-container__blankCanvas"></img>
            <img
              src={BACKGROUNDIMAGES[BGSelection].image}
              alt="default"
              className="preview-container__previewBackground"></img>
            <img
              src={HUMANIMAGELAYERS[humanSelection].image}
              alt="human"
              className="preview-container__previewHuman"></img>
            <img
              src={DOGIMAGELAYERS[dogSelection].image}
              alt="dog"
              className="preview-container__previewDog"></img>
          </Row>
          <Row>
            <FilterSelection
              label="Backgrounds"
              subject="tag"
              selection="BGSelection"
              humans={humans}
              setHumans={setHumans}
              images={BACKGROUNDIMAGES}
            />
            <Thumbnails
              thumbnails={BACKGROUNDIMAGES}
              humans={humans}
              selection="BGSelection"
              setHumans={setHumans}
              classIdentifier="bg-thumbnail"
            />
          </Row>
        </Col>
        <Col md="6" className="ms-5">
          <div>
            <h1>Sunset</h1>
            <p>
              A high-quality, custom canvas featuring you and your pup
              silhouetted by a golden sunset{" "}
            </p>
          </div>
          <form>
            {/* Choose Human */}
            <FilterSelection
              selection="humanSelection"
              val={gender}
              humans={humans}
              label="Gender"
              subject="gender"
              setHumans={setHumans}
              images={HUMANIMAGELAYERS}
            />
            <FilterSelection
              humans={humans}
              selection="humanSelection"
              label="Age"
              subject="age"
              setHumans={setHumans}
              images={HUMANIMAGELAYERS}
            />
            <FilterSelection
              selection="humanSelection"
              humans={humans}
              label="Body Language"
              subject="bodyLanguage"
              setHumans={setHumans}
              images={HUMANIMAGELAYERS}
            />
            <Thumbnails
              thumbnails={HUMANIMAGELAYERS}
              setHumans={setHumans}
              humans={humans}
              selection="humanSelection"
              classIdentifier="human-thumbnail"
            />

            {/* Choose Dog */}
            <FilterSelection
              humans={humans}
              label="Dog Breed"
              subject="breed"
              selection="dogSelection"
              setHumans={setHumans}
              images={DOGIMAGELAYERS}
            />
            <Thumbnails
              thumbnails={DOGIMAGELAYERS}
              humans={humans}
              selection="dogSelection"
              setHumans={setHumans}
              classIdentifier="dog-thumbnail"
            />

            <Button className="my-3 button-wide-transparentbg">
              Add to cart
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePage;
