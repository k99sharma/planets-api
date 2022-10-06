const template = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

        body{
            background-image: url('{{response.spaceTexture_url}}');
            color: white;
            font-family: font-family: 'Open Sans', sans-serif;
        }

        .row{
            display: grid;
            grid-template-columns: 50% 50%;
        }

        .column-one{
            row: 1;
            column: 1;
        }

        .column-two{
            row: 1;
            column: 2;

            display:flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        #planet-name{ 
            font-size: 3rem;
            text-transform: uppercase;
            padding-top: 20px;
            padding-left: 20px;
        }

        #tagline{
            display: flex;
            align-items: center;
            padding-left: 20px;
            color: grey;
        }

        #tagline span{
            margin-right: 10px;
        }

        #planet-image{
            display: flex;
            justify-content: center;
            align-items: center;

            padding-top: 20px;
            padding-bottom: 20px;
        }

        #description-container{
            padding-left: 20px;
            padding-right: 10px;
        }

        #facts-container{
            margin-top: 20px;
            margin-bottom: 20px;

            padding: 10px;
        }

        .fact{
            margin: 10px;
            display: flex;
            flex-direction: column;
        }

        .facts-value{
            font-size: 18px;
            border-bottom: 1px solid grey;
            color: #548CA8;
        }

        .facts-label{
            color: grey;
            font-size: 12px;
        }

        #scene-container{
            width: 100%;
            height: 100%;
            background-color: black;
        }
    </style>

    <div>
        <div class="row">
            <div class="column-one">
                <div id="planet-name">{{response.name}}</div>
                <div id="tagline">
                    <span><img width="20px" height="20px" src="{{response.tagline_icon}}" alt='tagline icon'/></span> 
                    {{response.tagline}}
                </div>
                <div id="planet-image">
                    <img height="200px" width="200px" src="{{response.picture}}" alt="planet image" />
                </div>
                <div id="description-container">
                    <div id="description">
                        {{response.description}}
                    </div>
                </div>

                <div id="facts-container">
                    <div class="row">
                        <div class="column-one fact">
                            <div id="yearLength" class="facts-value">
                            </div>
                            <div class="facts-label">
                                Length Of Year
                            </div>
                        </div>

                        <div class="column-two fact">
                            <div class="facts-value">
                                {{response.distanceFromSun}}
                            </div>
                            <div class="facts-label">
                                Distance From Sun
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="column-one fact">
                            <div class="facts-value">
                                {{response.namesake}}
                            </div>
                            <div class="facts-label">
                                Namesake
                            </div>
                        </div>

                        <div class="column-two fact">
                            <div class="facts-value">
                                {{response.numberOfMoons}} <span id="moon-icon"><img width="25px" height="25px" src="https://img.icons8.com/pastel-glyph/64/ffffff/moon-satellite.png" alt="moon icon" />
                            </div>
                            <div class="facts-label">
                                Moons
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column-two">
                <div id="scene-container"></div>
            </div>
        </div>
    </div>

    <script>
        const yearLen = document.getElementById('yearLength');
        if('{{response.yearLength}}' == '365')
            yearLen.innerHTML = '365 Days';

        else 
            yearLen.innerHTML = '{{response.yearLength}} Earth Days';
    </script>

    <script type="module">
        import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
        import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
        import { Clock } from 'https://unpkg.com/three@0.127.0/build/three.module.js';
        import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';

        // clock
        const clock = new Clock();

        // container 
        const container = document.getElementById('scene-container');

        //scene 
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 45, container.clientWidth / container.clientHeight, 1, 10000 );
        camera.position.z = 700;

        // lights
        const mainLight = new THREE.DirectionalLight('white', 2.5);

        // interactive controls
        const controls = new OrbitControls(camera, container);
        controls.enableDamping = true;
    
        // restricting zoom in and zoom out
        controls.minDistance = 400;
        controls.maxDistance = 850;

        // texture loader
        const textureLoader = new THREE.TextureLoader();

        // position light
        mainLight.position.set(5,3,5);
        scene.add(mainLight);

        // renderer setup
		const renderer = new THREE.WebGLRenderer({antialias : true});
        renderer.physicallyCorrectLights = true;
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild( renderer.domElement );

        // planet MESH
        var planetMesh;
        var planetMaterial;
        const planetGeometry = new THREE.SphereGeometry(200, 64, 64);
        const planetTexture_url = "{{ response.textureUrl }}";
        const planetTexture = textureLoader.load(planetTexture_url);
        planetMaterial = new THREE.MeshPhongMaterial({map : planetTexture});
        planetMesh = new THREE.Mesh( planetGeometry, planetMaterial );
        scene.add( planetMesh );

        // space MESH
        const spaceGeometry = new THREE.SphereGeometry(900, 32, 32);
        const spaceTexture_url = "{{ response.spaceTexture_url }}";
        const spaceTexture = textureLoader.load(spaceTexture_url);
		const spaceMaterial = new THREE.MeshBasicMaterial({
            map : spaceTexture, 
            side: THREE.BackSide
        });
		const spaceMesh = new THREE.Mesh( spaceGeometry, spaceMaterial );
		scene.add( spaceMesh );

        // specular and bump in planet Earth
        if("{{response.name}}" == "Earth"){
            // bump
            const earthBump = textureLoader.load(
                "https://www.shadedrelief.com/natural3/images/dem1.jpg"
            );
            planetMaterial.bumpMap = earthBump;
            planetMaterial.bumpScale = 0.005;
        }

        var ring;
        // rings mesh if rings are there 
        if({{response.rings.url_exists}}){
            const ringGeometry = new THREE.RingGeometry( 350, 250, 10000);
            const ringTexture_url = "{{response.rings.url}}";
            const ringTexture = textureLoader.load(ringTexture_url);
            var pos = ringGeometry.attributes.position;
            var v3 = new THREE.Vector3();
            for (let i = 0; i < pos.count; i++){
                v3.fromBufferAttribute(pos, i);
                ringGeometry.attributes.uv.setXY(i, v3.length() < 250 ? 0 : 1, 1);
            }

			const ringMaterial = new THREE.MeshBasicMaterial({
                map: ringTexture,
                transparent: true,
                side: THREE.DoubleSide
            });
			ring = new THREE.Mesh( ringGeometry, ringMaterial );
			scene.add( ring );
        }

        // animation function 
        function animate() {
            requestAnimationFrame( animate );
            const delta = clock.getDelta();
            planetMesh.rotation.y += (1 / 10) * delta;
            if({{response.rings.url_exists}}){
                ring.rotation.y = THREE.Math.degToRad(340);
                ring.rotation.x = THREE.Math.degToRad(100);
            }
            renderer.render( scene, camera );
        }
		animate();

    </script>
`;

pm.visualizer.set(template, {
    response: pm.response.json()
});
