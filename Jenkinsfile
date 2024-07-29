pipeline {
    agent any
    
    environment {
        GIT_CREDENTIALS_ID = 'credentialGitHub'
        REPO_URL = 'https://github.com/MauroSlli/ChallengueDevOps.git'
        AZURE_CREDENTIALS= "azurecredentials"
    }

    stages {
    
        stage('Checkout Branch') {
            steps {
                script {
                    try {
                        git branch: 'master', url: "${env.REPO_URL}", credentialsId: "${env.GIT_CREDENTIALS_ID}"
                    } catch (Exception e) {
                        echo "error ignorado"
                    }
                }
            }
        }
        
        stage('Package') {
            steps {
                script {
                    // Empaquetando Archivo
                    sh 'nuget pack challengue.nuspec'
                }
            }
        }

        stage('Publish to Azure Artifacts') {
            steps {
                script {
                  
                   // Crdenciales de azuredevops
                    
                   withCredentials([usernamePassword(credentialsId: "${env.AZURE_CREDENTIALS}", usernameVariable: 'USERNAME', passwordVariable: 'PAT')]) { 

                   // Establecer la variable de entorno AZURE_DEVOPS_EXT_PAT con el valor del PAT
                env.AZURE_DEVOPS_EXT_PAT = "${PAT}"

                // Iniciar sesión con el PAT almacenado en la variable de entorno
                sh 'az devops login'

                // Publicar el paquete en Azure Artifacts
                sh '''
                az artifacts universal publish --organization https://dev.azure.com/Maurosacarelli/ --feed Maurosacarelli --name mi_paquete --version 1.0.0 --description "Welcome to Universal Packages" --path .
                '''  
                   }
                }
            }
        }
        
        stage('contenido dummy.txt') {
          steps{
            sh 'cat dummy.txt'
          }
        }
                
            
        
    }    
}

