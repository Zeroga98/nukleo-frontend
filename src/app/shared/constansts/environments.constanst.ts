export class Environments {

    public static islocal = true;

    public static local = "http://172.27.15.67:8000";

	public static production = "";
    
    public static ENDPOINT = Environments.islocal ? Environments.local : Environments.production;
    public static API_ENDPOINT = `${Environments.ENDPOINT}/api`;
    public static SERVICES_ENDPOINT = `${Environments.ENDPOINT}/services`;
    public static ODATA_ENDPOINT = `${Environments.ENDPOINT}/odata`;
}
