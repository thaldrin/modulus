import axios from 'axios';
import { Server, Features, Usage } from '../../types';
import config from '../utils/config';
export default class Modulus {
    private url: string;
    constructor(url?: string) {
        // @ts-ignore
        if (!url) this.url = config.CULTUM_URL
        else this.url = url
    }



    async server(id: string): Promise<Server> {
        try {
            let server = await axios.get(`${this.url}/server/${id}`)
            return server.data
        } catch (error) {
            // @ts-ignore
            throw new Error(error)
        }
    }

    async toggle(server: string, setting: Features): Promise<Server> {
        try {
            const response = await axios({
                method: 'PUT',
                url: `${this.url}/server/${server}/edit`,
                data: {
                    setting: setting
                }
            })
            console.log(response.data)
            return response.data;
        } catch (error) {
            // @ts-ignore
            throw new Error(error)
        }
    }


    async add(server: string, prefix: string): Promise<string[]> {
        try {
            const response = await axios({
                method: 'PUT',
                url: `${this.url}/prefix/${server}`,
                data: {
                    prefix: prefix
                }
            })

            return response.data;
        } catch (error) {
            // @ts-ignore
            throw new Error(error)
        }
    }
    async remove(server: string, prefix: string): Promise<string[] | undefined> {
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${this.url}/prefix/${server}`,
                data: {
                    prefix: prefix
                }
            })

            return response.data;
        } catch (error) {
            // @ts-ignore
            throw new Error(error)
        }
    }

    async message(amount: number): Promise<Usage[]> {

        try {
            const response = await axios({
                method: 'PUT',
                url: `${this.url}/message`,
                params: {
                    amount: amount
                }
            })

            return response.data;
        } catch (error) {
            // @ts-ignore
            throw new Error(error)
        }
    }
    async command(command: string, amount: number): Promise<Usage[]> {

        try {
            const response = await axios({
                method: 'PUT',
                url: `${this.url}/command/${command}`,
                params: {
                    amount: amount
                }
            })

            return response.data;
        } catch (error) {
            // @ts-ignore
            throw new Error(error)
        }
    }
    async count(servers: number): Promise<Usage[]> {

        try {
            const response = await axios({
                method: 'PUT',
                url: `${this.url}/servers`,
                data: {
                    servers: servers
                }
            })

            return response.data;
        } catch (error) {
            // @ts-ignore
            throw new Error(error)
        }
    }

}