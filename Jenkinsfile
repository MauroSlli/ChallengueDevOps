pipeline {
    agent any
    
    environment {
        GIT_CREDENTIALS_ID = 'credentialGitHub'
        REPO_URL = 'https://github.com/MauroSlli/ChallengueDevOps.git'
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
                    
                   withCredentials([usernamePassword(credentialsId: 'azurecredentials', usernameVariable: 'USERNAME', passwordVariable: 'PAT')]) { 

                   // Publicando el paquete en Azure Artifacts
 
                   sh "az artifacts universal publish --organization https://dev.azure.com/Maurosacarelli/ --feed Maurosacarelli --name my-first-package --version 0.0.1 --description "Welcome to Universal Packages" --path ."
                  
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

