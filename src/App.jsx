import { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./Components/header";
import About from "./Components/about";
import Experience from "./Components/experience";
import Projects from "./Components/projects";
import Footer from "./Components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "../resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({
          resumeData: data,
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <About data={this.state.resumeData.main} />
        <Experience data={this.state.resumeData.main} />
        <Projects data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
