function authenticate(jwt: any, cb: () => void) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("jwt", JSON.stringify(jwt));
    cb();
  }
}

function isAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }
  if (sessionStorage.getItem("jwt")) {
    // @ts-ignore
    return JSON.parse(sessionStorage.getItem("jwt"));
  } else {
    return false;
  }
}

function clearJWT(cb: () => void) {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("jwt");
    cb();
    //optional
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  }
}

export { authenticate, isAuthenticated, clearJWT };
