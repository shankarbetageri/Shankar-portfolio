/* ========================================
   3D PORTFOLIO BACKGROUND
   THREE.JS
======================================== */


/* ========================================
   CHECK THREE.JS
======================================== */

if (typeof THREE === "undefined") {

    console.error(
        "Three.js could not be loaded."
    );

} else {


    /* ========================================
       CONTAINER
    ======================================== */

    const container =
        document.getElementById(
            "canvas-container"
        );


    if (!container) {

        console.warn(
            "canvas-container not found."
        );

    } else {


        /* ========================================
           SCENE
        ======================================== */

        const scene =
            new THREE.Scene();


        /* ========================================
           CAMERA
        ======================================== */

        const camera =
            new THREE.PerspectiveCamera(

                60,

                window.innerWidth /
                window.innerHeight,

                0.1,

                1000

            );


        camera.position.z = 8;


        /* ========================================
           RENDERER
        ======================================== */

        const renderer =
            new THREE.WebGLRenderer({

                antialias: true,

                alpha: true,

                powerPreference: "high-performance"

            });


        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                1.5
            )
        );


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );


        container.appendChild(
            renderer.domElement
        );


        /* ========================================
           PARTICLES
        ======================================== */

        const particleCount =
            window.innerWidth < 768
                ? 700
                : 1400;


        const particleGeometry =
            new THREE.BufferGeometry();


        const positions =
            new Float32Array(
                particleCount * 3
            );


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const i3 =
                i * 3;


            positions[i3] =
                (Math.random() - 0.5) * 30;


            positions[i3 + 1] =
                (Math.random() - 0.5) * 30;


            positions[i3 + 2] =
                (Math.random() - 0.5) * 30;

        }


        particleGeometry.setAttribute(

            "position",

            new THREE.BufferAttribute(
                positions,
                3
            )

        );


        /* ========================================
           PARTICLE MATERIAL
        ======================================== */

        const particleMaterial =
            new THREE.PointsMaterial({

                color: 0x8b5cf6,

                size:
                    window.innerWidth < 768
                        ? 0.035
                        : 0.025,

                transparent: true,

                opacity: 0.7,

                blending:
                    THREE.AdditiveBlending

            });


        /* ========================================
           PARTICLES
        ======================================== */

        const particles =
            new THREE.Points(

                particleGeometry,

                particleMaterial

            );


        scene.add(
            particles
        );


        /* ========================================
           MAIN 3D OBJECT
        ======================================== */

        const geometry =
            new THREE.IcosahedronGeometry(
                2.3,
                2
            );


        const material =
            new THREE.MeshBasicMaterial({

                color: 0x7c3aed,

                wireframe: true,

                transparent: true,

                opacity: 0.16

            });


        const sphere =
            new THREE.Mesh(

                geometry,

                material

            );


        sphere.position.set(
            3.5,
            1,
            -2
        );


        scene.add(
            sphere
        );


        /* ========================================
           TORUS
        ======================================== */

        const geometry2 =
            new THREE.TorusGeometry(
                3,
                0.015,
                16,
                100
            );


        const material2 =
            new THREE.MeshBasicMaterial({

                color: 0xa78bfa,

                transparent: true,

                opacity: 0.3

            });


        const torus =
            new THREE.Mesh(

                geometry2,

                material2

            );


        torus.position.set(
            -3,
            -2,
            -3
        );


        torus.rotation.x =
            Math.PI / 2;


        scene.add(
            torus
        );


        /* ========================================
           MOUSE
        ======================================== */

        let mouseX = 0;

        let mouseY = 0;


        document.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    event.clientX /
                    window.innerWidth -
                    0.5;


                mouseY =
                    event.clientY /
                    window.innerHeight -
                    0.5;

            }
        );


        /* ========================================
           ANIMATION
        ======================================== */

        function animate() {

            requestAnimationFrame(
                animate
            );


            /* Particles */

            particles.rotation.y +=
                0.0003;

            particles.rotation.x +=
                0.0001;


            /* Main object */

            sphere.rotation.x +=
                0.002;

            sphere.rotation.y +=
                0.003;


            sphere.position.x +=
                (
                    mouseX * 0.4 -
                    sphere.position.x +
                    3.5
                ) * 0.002;


            sphere.position.y +=
                (
                    -mouseY * 0.4 -
                    sphere.position.y +
                    1
                ) * 0.002;


            /* Torus */

            torus.rotation.x +=
                0.002;

            torus.rotation.y +=
                0.003;


            /* Camera */

            camera.position.x +=
                (
                    mouseX * 0.3 -
                    camera.position.x
                ) * 0.02;


            camera.position.y +=
                (
                    -mouseY * 0.3 -
                    camera.position.y
                ) * 0.02;


            camera.lookAt(
                scene.position
            );


            renderer.render(
                scene,
                camera
            );

        }


        animate();


        /* ========================================
           RESIZE
        ======================================== */

        window.addEventListener(
            "resize",
            function () {

                camera.aspect =
                    window.innerWidth /
                    window.innerHeight;


                camera.updateProjectionMatrix();


                renderer.setSize(

                    window.innerWidth,

                    window.innerHeight

                );


                renderer.setPixelRatio(
                    Math.min(
                        window.devicePixelRatio,
                        1.5
                    )
                );

            }
        );

    }

}
