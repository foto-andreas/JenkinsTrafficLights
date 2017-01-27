/*
* Ampelstatus.
*/
initTrafficLights()

@NonCPS
def initTrafficLights() {
    synchronized(getProjectVariables()) {
        TrafficLights = 'TrafficLights'
        trafficLightState = getProjectVariables().get(TrafficLights)
        if (trafficLightState == null) {
            trafficLightState = [:]
            setProjectVariable name: TrafficLights, value: trafficLightState
        }
    }
    echo "TrafficLights initialized"
}

@NonCPS
def updateTrafficLights(String stage) {

    synchronized(getProjectVariables()) {
    
        def last = trafficLightState.get(stage);
        if (last == null || last["id"] < currentBuild.id)
        {
            if (currentBuild.result == 'ABORTED') {
                return
            }
            trafficLightState.put(stage, [result: currentBuild.result, id: currentBuild.id, time: System.currentTimeMillis()])
            setProjectVariable name:TrafficLights, value: trafficLightState
        } else {
            echo "Not setting traffic lights - build was superseded by newer build."
        }

    }

}

try {
    stage('ST1') {
        currentBuild.result = 'SUCCESS'
    }
} finally {
    updateTrafficLights('STATE 1')
}

try {
    stage('ST2') {
        currentBuild.result = 'UNSTABLE'
    }
} finally {
    updateTrafficLights('STATE 2')
}
 
node() {

    try {
        stage('ST3') {
            sh 'exit 1'
        }
    } catch (Exception e) {
        currentBuild.result = 'FAILED'
    } finally {
        updateTrafficLights('STATE 3')
    }

}
