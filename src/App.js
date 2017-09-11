import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Screenshot11png from './images/install_jdk/Screenshot11.png';
import Screenshot12png from './images/install_jdk/Screenshot12.png';
import Screenshot16png from './images/install_jdk/Screenshot16.png';
import Screenshot20png from './images/install_jdk/Screenshot20.png';
import Screenshot22png from './images/install_jdk/Screenshot22.png';
import Screenshot32png from './images/install_jdk/Screenshot32.png';

class Image extends Component {
	render() {
		return <div>
			<img src={this.props.src} alt="" />
		</div>;
	}
}

class InstallingJDK extends Component {
	render() {
		return <div className="article">
			<h2>0. Installing the JDK</h2>
			<p>The Java compiler is included in the Java Development Kit.</p>
			<p>Installing it is fairly easy, but there are a couple of things to be aware of.</p>
			<p>The JDK is updated regularly and the link to the download page is not very stable. The easiest way to get to it is to look for it with a search engine. Searching for &quot;jdk&quot; should do the trick.</p>
			<Image src={Screenshot11png} />
			<p>Then look for a link whose title is Java something Development Kit something something.</p>
			<Image src={Screenshot12png} />
			<p>Then agree to the cookie thing, and accept the license agreement. You are then given the choices between a number of files for different operating system. Windows user should have no trouble hesitating between the x86 and x64 versions. The x86 versions will work on both 32bit computers and 64bit computers with a 64bit Windows installed, but it will be slower on 64bit computers. The x64 version will only work on 64bit computers with a 64bit Windows installed. If in doubt, the number of bits supported by a Windows system can be read in the System properties.</p>
			<Image src={Screenshot16png} />
			<p>Once the file is downloaded, launch it, then click the "Next" button.</p>
			<Image src={Screenshot20png} />
			<p>On this step, I suggest you to disable the "Public JRE". The JDK already contains Java JRE binaries twice, once has part of the top level bin folder, and once has part of an embedded jre. Beside, having both a JDK and a JRE may introduce cases where third party tools use the JRE instead of the JDK, and then complain about missing JDK tools. Troubleshooting these situations can be quite difficult, and I found it simpler to just not have a JRE to begin with. Also, with both a JDK and a JRE, the Java Update tool may update on but not the other, leaving you with two slightly different of the same thing, which can be another source of confusion.</p>
			<Image src={Screenshot22png} />
			<p>Then click next, wait a little, and that's it. The JDK is installed on your system</p>
			<Image src={Screenshot32png} />
			<p>If you followed these steps, you should be able to find the java compiler (javac.exe) at the following location: C:\Program Files\Java\jdk1.8.0_144\bin, or at a similar location because things change.</p>
		</div>;
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <InstallingJDK />
      </div>
    );
  }
}

export default App;
