import { body, validationResult, matchedData } from 'express-validator';
import { UpdateMembership } from '../../db/Queries/Update.js';
import dotenv from 'dotenv';

dotenv.config();

const adminFormValidation = [
    body("admin")
]

export const sendAdminForm = [
    adminFormValidation, 
    (request, response) => {
        const errors = validationResult(request)
        if (!errors.isEmpty()){
            return response.status(404).render("partials/error");
        }

        const { admin } = matchedData(request);

        if (admin === process.env.ADMIN_PASSWORD){
            UpdateMembership("admin", request.user.id);
            return response.redirect("/");
        }
        response.redirect("/log-in")
    },
]