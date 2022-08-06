import { Row } from "reactstrap";

const Thumbnails = ({
  thumbnails,
  classIdentifier,
  setHumans,
  selection,
}) => {
  const handleChange = (e, img) => {
    const newHuman = {
      ...img,
      [selection]: img.id,
    };
    setHumans(prev => ({ ...prev, ...newHuman }));
  };

  return (
    <Row className="m-0">
      {thumbnails.map(img => {
        return (
          <div
            key={img.id}
            id={img.id}
            onClick={e => handleChange(e, img)}
            className={`d-flex align-items-center option-container ${classIdentifier}`}>
            <img
              className="option-container__image"
              src={img.image}
              alt={"alt"}></img>
          </div>
        );
      })}
    </Row>
  );
};

export default Thumbnails;
