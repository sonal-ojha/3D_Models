import * as THREE from 'three';
import React from 'react';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats-js';
import OBJMTLoader from 'obj-mtl-loader';
import WindowResize from 'three-window-resize';

class ThreeDModel extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            materialPath: this.props.materialPath,
            objPath: this.props.objectPath,
        }
        this.scene = null,
        this.camera = null,
        this.renderer = null,
        this.container = null,
        this.controls = null,
        this.clock = null,
        this.stats = null,
        this.animate = this.animate.bind(this);
        this.update = this.update.bind(this);
        this.initializeLesson = this.initializeLesson.bind(this);
        // this.renderD = this.renderD.bind(this);
    }
    init() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0xcce0ff, 0.0003);
        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 2000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(0, 100, 300);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        console.log("renderer", this.renderer)

        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor(this.scene.fog.color);
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);
        WindowResize(this.renderer, this.camera)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        console.log("controls init", this.controls);

        this.controls.target = new THREE.Vector3(0, 0, 0);
        this.controls.maxDistance = 2000;
        this.clock = new THREE.Clock();
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '50px';
        this.stats.domElement.style.bottom = '50px';
        this.stats.domElement.style.zIndex = 1;
        this.container.appendChild( this.stats.domElement);
        var spLight = new THREE.SpotLight(0xffffff, 1.75, 2000, Math.PI / 3);
        spLight.castShadow = true;
        spLight.position.set(-100, 300, -50);
        this.scene.add(spLight);
        var ground = new THREE.Mesh(new  THREE.PlaneGeometry(200, 200, 10, 10), new THREE.MeshLambertMaterial({ color: 0x999999 }));    //removed new three
        ground.receiveShadow = true;
        ground.position.set(0, 0, 0);
        ground.rotation.x = -Math.PI / 2;
        this.scene.add(ground);
        loadModel: () => {
            var oLoader = new OBJMTLoader();
            oLoader.load(this.props.objectPath, this.props.materialPath, function (object) {
                object.position.x = -200;
                object.position.y = 0;
                object.position.z = 100;
                object.scale.set(0.1, 0.1, 0.1);
                this.model.scene.add(object);
            });
        };
    }
    render() {
        if (this.renderer) {
            // this.renderer.render(this.scene, this.camera);
        }
    }
    update() {
        console.log("controls", this.controls)
        // this.controls.update(this.clock.getDelta());
        // this.stats.update();
    }
    animate() {
        // window.requestAnimationFrame(this.animate);
        // this.render();
        // this.update();
    }

    initializeLesson() {
        // this.init();
        // this.animate();
    }

    render() {
        console.log("mat path", this.props.materialPath, "obj path", this.props.objectPath);
        return (
            <div onLoad={this.initializeLesson()} >
                display 3D model
            </div>
        );
    }
}

export default ThreeDModel;
