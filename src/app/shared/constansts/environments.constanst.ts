export class Environments {

    public static islocal = true;

    public static local = "http://616e18ee.ngrok.io";

	public static production = "";
    
    public static ENDPOINT = Environments.islocal ? Environments.local : Environments.production;
    public static API_ENDPOINT = `${Environments.ENDPOINT}/api`;
    public static SERVICES_ENDPOINT = `${Environments.ENDPOINT}`;
    public static ODATA_ENDPOINT = `${Environments.ENDPOINT}/odata`;
}
