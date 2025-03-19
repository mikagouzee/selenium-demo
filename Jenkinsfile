pipeline{
    agent any
    tools {
        nodejs "node"
    }

    stages {
        stage('prep-server'){
            steps{
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'node ./tests/test.js'
            }
        }
    }
}