//@ts-nocheck
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import  vertex from "./shader/vertexParticles.glsl";
import fragment from "./shader/fragment.glsl";
import  vertex1 from "./shader/vertexParticles1.glsl";
import fragment1 from "./shader/fragment1.glsl";


function range(start:number, end:number){
    let r = Math.random();
    return r * (end - start) + start;
}

function generateString(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%#@!&$*?";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        if(Math.random() > 0.5){

            result += '<strong>'+characters.charAt(Math.floor(Math.random() * charactersLength))+'</strong>'
        }else{

            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        };
        result += " ";
    }
    return result;
}
function getXPosition(element) {
    let rect = element.getBoundingClientRect();
    return rect.right;
}

export class ScrollerEncoded {
    separator: HTMLElement;
    frame: number;
    scene: THREE.Scene;
    scene2: THREE.Scene;
    scroller: HTMLElement[];
    encodedSlides: HTMLElement[];
    position: number;
    container: HTMLElement;
    container1: HTMLElement | null;
    width: number;
    height: number;
    renderer: THREE.WebGLRenderer;
    renderer2: THREE.WebGLRenderer;
    camera: THREE.OrthographicCamera;
    controls: OrbitControls;
    time: number;
    material: THREE.ShaderMaterial;
    material1: THREE.ShaderMaterial;
    dracoLoader: DRACOLoader;
    gltf: GLTFLoader;
    isPlaying: boolean;

    constructor(options: { dom: HTMLElement }) {

        this.separator = document.querySelector(".separator");
        this.frame = 0;
        this.scene = new THREE.Scene();
        this.scene2 = new THREE.Scene();
        this.scroller = Array.from(document.querySelectorAll<HTMLElement>(".slider__scroller"));
        this.encodedSlides = Array.from(document.querySelectorAll<HTMLElement>(".encoded .slide"));


        this.position = -4 * (360 + 200);

        this.container = options.dom;
        this.container1 = document.querySelector('#container1');
        this.width = this.container?.offsetWidth;
        this.height = this.container?.offsetHeight;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        this.renderer2 = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.width, this.height);
        this.renderer2.setSize(this.width, this.height);


        this.container.appendChild(this.renderer.domElement);
        this.container1?.appendChild(this.renderer2.domElement);

        let frustumSize = 1;
        let aspect = this.width / this.height;

        this.camera = new THREE.OrthographicCamera(
            frustumSize * aspect / -2,
            frustumSize * aspect / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
           1000 
        );

        this.camera.position.set(0, 0, 2);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enablePan = false;
        this.controls.enableZoom = false;
        this.time = 0;

        this.isPlaying = true;

        this.setupResize();
        this.resize();
        this.addObjects();
        this.addObjects1();
        this.render();
        this.populateEncodedSlides();
    }

    populateEncodedSlides() {
        this.encodedSlides.forEach((slide, i) => {
            const text = generateString(400);
            slide.innerHTML = text;
        });
    }



    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }


    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.renderer2.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;

        this.camera.updateProjectionMatrix();
    }

    addObjects(){
        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable",
            },
            side: THREE.DoubleSide,
            uniforms:{
                time:{value:0},
                resolution:{value: new THREE.Vector4()}
            },
            transparent: true,
            blending: THREE.AdditiveBlending,
            vertexShader:vertex,
            fragmentShader:fragment
        })
        let geo  = new THREE.BufferGeometry();
        let number = 3000;
        let positions = new Float32Array(number * 3);
        let sizes = new Float32Array(number);
        let velocity = new Float32Array(number);
        let distance = new Float32Array(number);
        let random = new Float32Array(number);

        for(let i = 0; i < number; i++){
            let i3 = i * 3;
            positions[i3 + 0] = 0;
            positions[i3 + 1] = Math.random() - 0.5 + 0.5*(Math.random() - 0.5);

            positions[i3 + 1] *= 0.66;
            positions[i3 + 2] = 0;
            random[i] = range(1,20);

            sizes[i] = range(1, 20);
            velocity[i] = range(0.1, 1);
            distance[i] = range(0.1, 1);
        }

        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
        geo.setAttribute("aDistance", new THREE.BufferAttribute(distance, 1));
        geo.setAttribute("aVelocity", new THREE.BufferAttribute(velocity, 1));
        geo.setAttribute("aRandom", new THREE.BufferAttribute(random, 1));



        this.points = new THREE.Points(geo, this.material);
        this.scene.add(this.points);
    }

    addObjects1(){
        this.material1 = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable",
            },
            side: THREE.DoubleSide,
            uniforms:{
                time:{value:0},
                resolution:{value: new THREE.Vector4()}
            },
            transparent: true,
            blending: THREE.AdditiveBlending,
            vertexShader:vertex1,
            fragmentShader:fragment1
        })
        let geo  = new THREE.BufferGeometry();
        let number = 1000;
        let positions = new Float32Array(number * 3);
        let sizes = new Float32Array(number);
        let velocity = new Float32Array(number);
        let distance = new Float32Array(number);

        for(let i = 0; i < number; i++){
            let i3 = i * 3;
            positions[i3 + 0] = 0;
            positions[i3 + 1] = Math.random() - 0.5 + 0.5*(Math.random() - 0.5);

            positions[i3 + 1] *= 0.66;
            positions[i3 + 2] = 0;

            sizes[i] = range(1, 10);
            velocity[i] = range(0.1, 1);
            distance[i] = range(0.1, 1);
        }

        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
        geo.setAttribute("aDistance", new THREE.BufferAttribute(distance, 1));
        geo.setAttribute("aVelocity", new THREE.BufferAttribute(velocity, 1));


        this.points1 = new THREE.Points(geo, this.material1);
        this.scene2.add(this.points1);
    }

    addLights(){
        const light1 = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(light1);
        const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
        light2.position.set(0.5,0,0.8666);
        this.scene.add(light2);
    }

    stop(){

    }

    play(){
        if(!this.isPlaying){
            this.isPlaying = true;
            this.render();
        }
    }

    checkIfActive() {
        // Calculate x positions of encoded slides and check if any slide is centered
        let half = window.innerWidth / 2;
        let slideWidth = 360;
        let center = false;

        this.encodedSlides.forEach(slide => {
            let xPos = getXPosition(slide);
            if (xPos > half && (xPos - slideWidth) < half) {
                center = true;
            }
        });

        return center;
    }

    render() {
        if (!this.isPlaying) return;
        this.time += 0.05;
        this.frame += 1;
        if(this.frame % 20 === 0){
            this.populateEncodedSlides();
        }
        this.position += 0.5;
        if(this.position > 0) this.position = -4 * (360 + 200);
        this.scroller.forEach((scroller, i) => {
            scroller.style.transform = `translateX(${this.position}px)`;
        });
        if(this.checkIfActive()){
            this.container.style.opacity = 1;
            this.separator.style.opacity = 1;
        }else{
            this.separator.style.opacity = 0;
            this.container.style.opacity = 0;
        }


        this.material.uniforms.time.value = this.time;
        this.material1.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
        this.renderer2.render(this.scene2, this.camera);
    }
}

