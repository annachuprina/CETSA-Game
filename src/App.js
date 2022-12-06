import {useRef, useState} from "react"
import { Unity, useUnityContext } from "react-unity-webgl";
import logo from './logo.svg';
import './App.css';
import useGyroscope from 'react-hook-gyroscope'



function App() {
  const gyroscope = useGyroscope()
  const { unityProvider } = useUnityContext({
    loaderUrl: "./webgl1/Build/webgl1.loader.js",
    dataUrl: "./webgl1/Build/webgl1.data",
    frameworkUrl: "./webgl1/Build/webgl1.framework.js",
    codeUrl: "./webgl1/Build/webgl1.wasm",
  })
  return (
        <>
        <li>X: {gyroscope.x}</li>
        fnblkflnblts: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 601 bytes | 300.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: 
remote: GitHub found 8 vulnerabilities on 
        <Unity style={{border:'1px solid red', maxWidth:'600px', height:'100vh'}}  unityProvider={unityProvider} className=""/>
        </>
  );
}

export default App;
