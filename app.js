import * as THREE from 'threejs/build/three.module.js';
import { OrbitControls } from 'three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
    
        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
        
    }
    
	render( ) {   
        
    }
}

export { App };