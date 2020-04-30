export class Antimeridianhandler {

	/**
	 * Normalize a bounding box.
	 */
  normalizeBoundingBox(lngLatBounds, tt) {
    const south = lngLatBounds.getSouth();
    const west = lngLatBounds.getWest();
    const north = lngLatBounds.getNorth();
    const east = west + this._difference(lngLatBounds.getEast(), west);

    return new tt.LngLatBounds([
      [ west, south ],
      [ east, north ]
      ]);
  }

  /**
  * Difference (angular) between two angles.
  */
  _difference(a, b) {
    return 180 - Math.abs(Math.abs(a - b) - 180);
  }
}
