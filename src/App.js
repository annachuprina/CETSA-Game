import {useRef, useState} from "react"
import { Unity, useUnityContext } from "react-unity-webgl";
import logo from './logo.svg';
import './App.css';



function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./WebGL_1/Build/webgl1.loader.js",
    dataUrl: "./WebGL_1/Build/webgl1.data",
    frameworkUrl: "./WebGL_1/Build/webgl1.framework.js",
    codeUrl: "./WebGL_1/Build/webgl1.wasm",
  })
  return (
    <div className="App">
    <Unity style={{border:'1px solid red', maxWidth:'600px', height:'100vh'}}  unityProvider={unityProvider} className=""/>; 
    </div>
  );
}

export default App;
