/*
 * Copyright (C) 2015-2020 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. AND ITS CONTRIBUTORS ``AS IS''
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL APPLE INC. OR ITS CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */
var Strings = {
    version: "development",
    text: {
        testName: "Test Name",
        score: "Score",
        title: "MotionMark %s",
        determininingFrameRate: "Detecting Frame Rate…",
        runBenchmark: "Run Benchmark",
        usingFrameRate: "Framerate %sfps",
        frameRateDetectionFailure: "Failed to determine framerate, using 60fps",
        non60FrameRate: "Framerate %sfps. If comparing browsers, be sure to <a href='about.html#set-display-fps'>set your display refresh rate to 60Hz</a>."
    },
    json: {
        version: "version",

        marks: "marks",
        samplingStartTimeOffset: "Start sampling",
        samplingEndTimeOffset: "End sampling",

        samples: "samples",
        dataFieldMap: "dataFieldMap",
        controller: "controller",
        frameType: "frameType",
        time: "time",
        complexity: "complexity",
        frameLength: "frameLength",
        smoothedFrameLength: "smoothedFrameLength",

        mutationFrameType: "m",
        animationFrameType: "a",

        result: "result",
        configuration: "configuration",
        score: "score",
        scoreLowerBound: "scoreLowerBound",
        scoreUpperBound: "scoreUpperBound",
        fps: "fps",
        bootstrap: "bootstrap",
        bootstrapIterations: "bootstrapIterations",
        measurements: {
            average: "average",
            concern: "concern",
            stdev: "stdev",
            percent: "percent"
        },

        regressions: {
            startIndex: "startIndex",
            endIndex: "endIndex",
            segment1: "segment1",
            segment2: "segment2",
            profile: "profile"
        },

        profiles: {
            slope: "slope",
            flat: "flat"
        },

        results: {
            iterations: "iterationsResults",
            tests: "testsResults"
        }
    }
};
