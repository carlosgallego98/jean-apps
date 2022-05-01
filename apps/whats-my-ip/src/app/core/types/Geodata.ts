import ISP from "./ISP";
import Location from "./Location";
import Proxy from "./Proxy";

export default interface Geodata {
    ip: string;
    location: Location;
    as: ISP
    isp: string,
    proxy: Proxy
}