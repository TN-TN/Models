/**
 * Created by tom on 04.03.17.
 */

var thinky = require('thinky')();
var type = thinky.type;

/**
 * ID - UserID
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
    "id": type.number().required(),
    "account_name": type.string().required(),
    "primary_email": type.string().email(),
    "emails": type.array().schema(type.object().schema({
        "email": type.string().email(),
        "verified": type.boolean()
    })),
    "createdAt": type.Date().default(r.now()),
    "permissions": type.array().schema(type.object().schema({
        "id": type.string()
    })),
    "groups": type.array().schema(type.object().schema({
        "id": type.number()
    })),
    "profilePicture": type.any(),
    "friends": type.array().schema(type.object().schema({
        "id": type.number()
    })),
    "class": type.number(),
    "courses": type.array().schema(type.object().schema({"id": type.number()}))
});