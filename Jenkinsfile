pipeline{
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    bat "docker build -t newImage ."
                    bat "docker run -d -p 8085:3006 newImage"
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo "testing ...."
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                   echo "deploying"
                }
            }
        }
    }
}