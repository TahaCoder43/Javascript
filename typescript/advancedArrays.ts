
// create a read only Array


const coordinates: readonly number[] = [25, 10]

// This would cause an error
// coordinates.push(4)
// coordinates[1] = "something"

// it is a good practice to make your tuples read only
type readonlyTuple = readonly [number, boolean, string];

const tuple1: readonlyTuple = [10, true, "something"];

// this would cause an error
// tuple = [20, false, "anotherthing"];