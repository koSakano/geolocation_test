import * as React from "react";

export const Geolocation = (): React.ReactElement =>  {
  const [isAvailable, setAvailable] = React.useState<boolean>(false);
  const [position, setPosition] = React.useState<{lat: number|null, lng: number | null}>({ lat: null, lng: null });
  const [watchStatus, setWatchStatus] = React.useState<{isWatching: boolean, watchId: number}>({ isWatching: false, watchId: 0 });

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  // 現在地取得
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ lat: latitude, lng: longitude });
    });
  };

  // 追跡開始
  const startWatchPosition = () => {
    const watchId = navigator.geolocation.watchPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ lat: latitude, lng: longitude });
    });
    setWatchStatus({ isWatching: true, watchId});
  };

  // 追跡終了
  const stopWatchPosition = () => {
    navigator.geolocation.clearWatch(watchStatus.watchId);
    setWatchStatus({ isWatching: false, watchId: watchStatus.watchId });
  };

  return (
    <>
      <p>Geolocation API Sample</p>
      {isAvailable && (
        <div>
          <button onClick={getCurrentPosition}>現在地取得</button>
          {watchStatus.isWatching ? (
            <button onClick={() => stopWatchPosition()}>
              追跡中止
            </button>
          ) : (
            <button onClick={startWatchPosition}>追跡開始</button>
          )}
          <div>
            <h3>Position</h3>
            <div>
              latitude: {position.lat}
              <br />
              longitude: {position.lng}
            </div>
          </div>
          <div>
            <h3>Watch Mode</h3>
            <p>Watch Status: {watchStatus.isWatching ? "追跡中" : "追跡中止"}</p>
            <p>Watch ID: {watchStatus.watchId}</p>
          </div>
        </div>
      )}
    </>
  );
};
