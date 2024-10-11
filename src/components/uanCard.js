import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UANCard() {
  return (
    <Card className="mx-auto" style={{ width: "40rem", paddingTop: "4%" }}>
      <Card.Img
        variant="top"
        //src="./components/body/download.png "
        //src="uan_card.js/100px180"
        src="https://1.bp.blogspot.com/-R5Y0mgPuU9Y/YSR6bYuxF4I/AAAAAAAABAc/WMNZLwpjRGkVH5VSfEt0PnNUR1AQzrqowCLcBGAsYHQ/s537/IMG_20210824_101910.jpg"
        //src="https://miro.medium.com/max/1400/1*1JNh2o6ImLlW1Aqb1dBXfA.jpeg"
      />
      <Card.Body>
        <Card.Title>UAN Card</Card.Title>
        <Card.Text>This is your UAN Card .</Card.Text>
        <Button variant="primary">Download</Button>
      </Card.Body>
    </Card>
  );
}

export default UANCard;
