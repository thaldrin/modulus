// @ts-nocheck
import yaml from 'js-yaml'
import { readdirSync as readdir, readFileSync as readfile } from "fs";
import p from "path";


let config = yaml.load(readfile(p.join(__dirname, "../../../..", "cultum.config.yml"), 'utf8'))


export default config