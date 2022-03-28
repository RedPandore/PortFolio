import './styles/app.scss';

import './bootstrap';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Basic from './components/Basic';
import NotFound from './components/404';
import Particles from 'react-tsparticles';

export default function AppReact() {
    return (
        <BrowserRouter>
          <Particles
                id="tsparticles"
                style={{
                    width: '100%',
                    height: '100vh',
                    zIndex: '-1',
                }}
                options={{
                    fpsLimit: 30,
                    interactivity: {
                        detectsOn: 'window',
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'grab',
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 0.4,
                                    color: "#dc4c4c"
                                },
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#dc4c4c',
                        },
                        links: {
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                            color: '#dc4c4c',
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'out',
                            random: false,
                            speed: 6,
                            straight: false,
                            v: true,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 10,
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                    },
                    detectRetina: true,
                    retina_detect: true,
                }}
            />
            <Switch location={location} key={location.pathname}>
                <Route exact path={'/'} component={Basic} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
