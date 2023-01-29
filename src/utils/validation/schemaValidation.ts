import * as Joi from 'joi'
import {Express, Request, Response, NextFunction}  from 'express'
export const ValidateProductSchema = (schema: any) => {
           try {
             const body =  Joi.object().keys({
                  title : Joi.string().required(),
                  image : Joi.string().required()
               })
              const valid = body.validate(schema, {abortEarly: false})
              return valid
           } catch (error: any) {
              return console.log(error.message)
           }
}