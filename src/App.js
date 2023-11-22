import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="menu">
          <li>
            <ul>Home</ul>
            <ul>Service</ul>
            <ul>News</ul>
            <ul>Blog</ul>
            <ul>Contact</ul>
          </li>
        </div>
        <div className="content">
          <h1>NCC</h1>
          <h2>We do it with passion</h2>
          <div className="textContent">
            <h1>Title</h1>
            <p>
              Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo một luồng ý
              để trình bày một ý kiến, một suy nghĩ hoặc một phần của nội dung.
              Nó bao gồm một tập hợp các câu văn có liên quan, có mục đích chung
              và được sắp xếp một cách logic.
            </p>
          </div>
          <div className="contentItem">
            <div className="item">
              <h1>header</h1>
              <div className="itemIn">
                <img
                  src={require("./asset/80930.png")}
                  alt="My Image"
                  style={{ width: "100px", height: "100px" }}
                ></img>
                <p>
                  Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo một
                  luồng ý Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo
                  một luồng ý
                </p>
              </div>
            </div>
            <div className="item">
              <h1>header</h1>
              <div className="itemIn">
                <img
                  src={require("./asset/80930.png")}
                  alt="My Image"
                  style={{ width: "100px", height: "100px" }}
                ></img>
                <p>
                  Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo một
                  luồng ý Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo
                  một luồng ý
                </p>
              </div>
            </div>
            <div className="item">
              <h1>header</h1>
              <div className="itemIn">
                <img
                  src={require("./asset/80930.png")}
                  alt="My Image"
                  style={{ width: "100px", height: "100px" }}
                ></img>
                <p>
                  Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo một
                  luồng ý Đoạn văn là một đơn vị văn bản nhỏ, được sắp xếp theo
                  một luồng ý
                </p>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>copyRight @ 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
