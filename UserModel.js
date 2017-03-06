/**
 * Created by tom on 04.03.17.
 */

const thinky = require('thinky')();
let type = thinky.type;

/**
 * ID - UserID as UUID v4
 * AccountName - max.mustermann
 * PrimaryEmail - max.mustermann@schule.de
 * emails - Some private mails / verified - has he clicked the verifies link for this mail
 * createdAt - Date of Account Creation
 * permissions - Permission String
 * groups - Group IDs User belongs to
 * profilePicture - Users ProfilePicture
 * friends - IDs of user friends
 * class - ID of users class
 * courses - ID of users courses
 *
 */

const User = thinky.createModel('User', {
    "id": type.number().uuid(4).required(),
    "account_name": type.string().required(),
    "primary_email": type.string().email(),
    "emails": type.array().schema(type.object().schema({
        "email": type.string().email(),
        "verified": type.boolean()
    })),
    "createdAt": type.Date().default(r.now()).required(),
    "createdBy": type.number().required(),
    "permissions": type.array().schema(type.object().schema({
        "id": type.string()
    })).required(),
    "private_data": type.array().scheme(type.object().scheme({
        "address": type.array().scheme(type.object().scheme({
            "street": type.string(),
            "number": type.string(),            //String because 5B or similar
            "zip": type.number(),
            "city": type.string(),
            "country": type.string(),
        })),
        "phone_number": type.number(),
        "mobile_number": type.number(),
        //Erziehungsberechtigte
        "leagal_guardian": type.array().scheme(type.object().schema({
            "type": type.array().schema(type.object().schema({
                "email": type.string().email(),
                "private_number": type.number(),
                "mobile_number": type.number(),
                "address": type.array().scheme(type.object().scheme({
                    "street": type.string(),
                    "number": type.string(),            //String because 5B or similar
                    "zip": type.number(),
                    "city": type.string(),
                    "country": type.string(),
                })),
            }))
        })).required(),
        "notes": type.string().optional()
    })),
    "groups": type.array().schema(type.object().schema({
        "id": type.number()
    })),
    "profilePicture": type.any().optional(),
    "friends": type.array().schema(type.object().schema({
        "id": type.number()
    })),
    "class": type.number(),
    "courses": type.array().schema(type.object().schema({"id": type.number()}))
});