import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function OffcanvasExample() {
  const [url, setUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const run = () => {
    const options = {
      method: "GET",
      url:
        "https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess",
      params: {
        url: "https://www.youtube.com/watch?v=6qeT4rvcak0",
        format: "mp3",
        responseFormat: "json",
        lang: "en"
      },
      headers: {
        "X-RapidAPI-Key": "df45ea9060msh15f4ee1f5d73625p112f5fjsnf2de97993444",
        "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.YoutubeAPI.urlMp3);
        setUrl(response.data.YoutubeAPI.urlMp3);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3">
        <Container>
          <Col sm={2}></Col>
          <Col sm={8}></Col>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg " />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Tools
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Container>
               
                </Container>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Stack gap={2} className="col-md-5 mx-auto">
        <input
          onChange={(e) => {
            setYoutubeUrl(e.target.value);
          }}
          type="text"
          placeholder="Youtube Url"
          style={{
            margin: 5,
            borderStartEndRadius: 5,
            borderEndStartRadius: 5,
            borderBlockColor: "red",
            height: 35
          }}
        />
        <div className="btn btn-info" onClick={run}>
          Convert
        </div>
        <div
          className="btn btn-success"
          onClick={() => {
            window.location.href = url;
          }}
          style={{ display: url === "" ? "none" : "block" }}
        >
          Download
        </div>
      </Stack>
    </>
  );
}

export default OffcanvasExample;
