export const getQuery = function(): Map<string, string> | any {
    let href: string = window.location.href;
    let search: string = href.split("?")[1];
    let res: Map<string, string> | any = {};
    if (search && search.trim().length > 0) {
        let qa: string[] = search.split("&");
        if (qa && qa.length > 0) {
            qa.map((item: string) => {
                let ia: any[] = item.split("=");
                if (ia[1] != undefined) {
                    res[ia[0]] = ia[1];
                }
            });
        }
    }
    return res;
};
