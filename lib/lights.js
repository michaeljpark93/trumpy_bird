import Environment from './environment.js';
import EnvironmentView from './environment_view.js';

document.addEventListener("DOMContentLoaded", () => {
    let canvasEl = document.getElementById('canvas');
    canvasEl.width = document.documentElement.clientWidth;
    canvasEl.height = document.documentElement.clientHeight;

    const ctx = canvasEl.getContext('2d');
    const pos = [0, 0]
    const environment = new Environment(pos);
    const environmentView = new EnvironmentView(environment, ctx, pos);
    environmentView.start();
});