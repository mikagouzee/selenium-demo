pipeline{
    agent any
    tools{
        node "node"
    }

    stages {
        stage('Test'){
            steps{
                sh 'node ./tests/test.js'
            }
        }
    }
}