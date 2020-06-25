import React, {Component} from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

//header组件
function Header() {
  return <header>header</header>
}

// main组件
function Main() {
  return (
    <section>
      content
      <List/>
    </section>
  )
}

function List() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )
}

// footer
function Footer() {
  return (
    <footer>
      footer
    </footer>
  )
}