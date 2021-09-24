import { useEffect, useState } from 'react'
// Teches
import jsIcon from '../assets/icons/javascript_48px.svg'
import nodejsIcon from '../assets/icons/nodejs_48px.svg'
import htmlIcon from '../assets/icons/html_5_48px.svg'
import cssIcon from '../assets/icons/css3_48px.svg'

import reactIcon from '../assets/icons/react_48px.svg'
import reduxIcon from '../assets/icons/redux_48px.svg'
import jestIcon from '../assets/icons/jest.svg'
import typescriptIcon from '../assets/icons/typescript_48px.svg'
import expressIcon from '../assets/icons/express.svg'

import dockerIcon from '../assets/icons/docker_48px.svg'

import mysqlIcon from '../assets/icons/mysql_logo_48px.svg'
import mongodbIcon from '../assets/icons/mongodb_48px.svg'
import redisIcon from '../assets/icons/redis_48px.svg'
import firebaseIcon from '../assets/icons/firebase_48px.svg'

import gitIcon from '../assets/icons/git_48px.svg'
import jiraIcon from '../assets/icons/jira_48px.svg'
import trelloIcon from '../assets/icons/trello_48px.svg'
import circleciIcon from '../assets/icons/circleci_48px.svg'
import githubIcon from '../assets/icons/github_48px.svg'

import googleIcon from '../assets/icons/google/google_48px.svg'
import googleDocApiIcon from '../assets/icons/google/google_docs_48px.svg'
import googleDriveApiIcon from '../assets/icons/google/google_drive_48px.svg'
import googleAppsScriptIcon from '../assets/icons/google/google-apps-script.svg'

// teches used in past
import golangIcon from '../assets/icons/golang.svg'
import vueIcon from '../assets/icons/vue.svg'
import vuexIcon from '../assets/icons/vuex.png'
import vuetifyIcon from '../assets/icons/vuetify.png'
import materialUiIcon from '../assets/icons/material-ui.png'

import bootstrapIcon from '../assets/icons/bootstrap.svg'

// Other
import projectsIcon from '../assets/icons/rocket.svg'

import { isMobile } from 'react-device-detect'

export default function Icon({
    tech,
    width
}: {
    tech: string
    width?: {
        mobile?: string
        desktop: string
    }
}) {
    const [src, setSrc] = useState('')

    useEffect(() => {
        switch (tech) {
            // Teches
            case 'javascript':
                setSrc(jsIcon)
                break
            case 'html':
                setSrc(htmlIcon)
                break
            case 'css':
                setSrc(cssIcon)
                break

            case 'react':
                setSrc(reactIcon)
                break
            case 'redux':
                setSrc(reduxIcon)
                break
            case 'jest':
                setSrc(jestIcon)
                break

            case 'nodejs':
                setSrc(nodejsIcon)
                break
            case 'express':
                setSrc(expressIcon)
                break

            case 'typescript':
                setSrc(typescriptIcon)
                break

            case 'docker':
                setSrc(dockerIcon)
                break

            case 'mysql':
                setSrc(mysqlIcon)
                break
            case 'mongodb':
                setSrc(mongodbIcon)
                break
            case 'redis':
                setSrc(redisIcon)
                break
            case 'firebase':
                setSrc(firebaseIcon)
                break

            case 'git':
                setSrc(gitIcon)
                break
            case 'jira':
                setSrc(jiraIcon)
                break
            case 'trello':
                setSrc(trelloIcon)
                break
            case 'circleci':
                setSrc(circleciIcon)
                break
            case 'github':
                setSrc(githubIcon)
                break

            case 'google':
                setSrc(googleIcon)
                break
            case 'google-doc-api':
                setSrc(googleDocApiIcon)
                break
            case 'google-drive-api':
                setSrc(googleDriveApiIcon)
                break
            case 'google-apps-script':
                setSrc(googleAppsScriptIcon)
                break

            // teches used in past
            case 'golang':
                setSrc(golangIcon)
                break
            case 'vue':
                setSrc(vueIcon)
                break
            case 'vuex':
                setSrc(vuexIcon)
                break
            case 'vuetify':
                setSrc(vuetifyIcon)
                break
            case 'material-ui':
                setSrc(materialUiIcon)
                break

            case 'bootstrap':
                setSrc(bootstrapIcon)
                break

            // other
            case 'projects':
                setSrc(projectsIcon)
                break
        }
    }, [])

    return (
        <img
            style={{
                width: isMobile
                    ? width
                        ? width.mobile || width.desktop || '30%'
                        : '30%'
                    : width
                    ? width.desktop || '10%'
                    : '10%'
            }}
            src={src}
            alt={tech}
        />
    )
}
