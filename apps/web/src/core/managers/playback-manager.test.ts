import { describe, expect, test } from "bun:test";
import { PlaybackManager } from "./playback-manager";

if (!("window" in globalThis)) {
	Object.assign(globalThis, {
		window: {
			dispatchEvent: () => true,
		},
		requestAnimationFrame: () => 1,
		cancelAnimationFrame: () => {},
	});
}

function createPlaybackManager({
	tracks = [],
	totalDuration = 0,
}: {
	tracks?: Array<{ elements: unknown[] }>;
	totalDuration?: number;
}) {
	const editor = {
		timeline: {
			getTracks: () => tracks,
			getTotalDuration: () => totalDuration,
		},
	} as never;

	return new PlaybackManager(editor);
}

describe("PlaybackManager", () => {
	test("does not start playback when the timeline has no elements", () => {
		const manager = createPlaybackManager({
			tracks: [{ elements: [] }],
			totalDuration: 0,
		});

		manager.play();

		expect(manager.getIsPlaying()).toBe(false);
		expect(manager.canPlay()).toBe(false);
	});

	test("starts playback when the timeline has elements", () => {
		const manager = createPlaybackManager({
			tracks: [{ elements: [{ id: "clip-1" }] }],
			totalDuration: 5,
		});

		manager.play();

		expect(manager.getIsPlaying()).toBe(true);
		expect(manager.canPlay()).toBe(true);
		manager.pause();
	});
});
