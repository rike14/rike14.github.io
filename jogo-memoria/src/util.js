
class Util {
    static timeout(time) {
      return new Promise(resolve => setTimeout(resolve, time))
    }
  }