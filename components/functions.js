export function prop_access(obj, str) {
    if (typeof str != "string"){
        return obj;
    }
    if(typeof obj != 'object' || obj == null) {
        console.log(str + ' not exist');
        return;
    }
    if (str === '') {
        return obj;
    }
    const props = str.split('.');
    let propriete = obj;
    props.forEach(function (prop) {
        if(!propriete.hasOwnProperty(prop)) {
            console.log(str + ' not exist');
            return;
        }
        propriete = propriete[prop];
    });
    return propriete;
}

function type_check_v1(input, type) {
    switch (typeof input) {
        case "string":
        case "symbol":
        case "number":
        case "function":
        case "undefined":
        case "boolean":
            return typeof input === type;
        case "object":
            switch (type) {
                case 'null':
                    return input === null;
                case 'array':
                    return Array.isArray(input);
                default:
                    return input !== null && !Array.isArray(input);
            }
    }
}
function type_check_v2(input,type) {
	for (key in type) {
		switch (key) {
			case "type":
				if (!type_check_v1(input, type.type)) return false;
				break;
			case "value":
				if(JSON.stringify(input) !== JSON.stringify(type.value)) {
                    return false;
                };
                break;
			case "enum":
				type.enum.forEach(val => {
					if (!type_check_v2(input, { value: val })) {
						return false;
					}
					return true;
				});
        }
    }
    return true;
}
