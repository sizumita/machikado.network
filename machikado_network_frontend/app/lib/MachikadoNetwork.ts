import type {AptosPayload} from "~/lib/aptos/TransactionBuilder";
import type {Address} from "~/lib/aptos";
import {waitForTransaction} from "~/lib/aptos";

export async function createAccountStore(publisher: Address) {
    const payload: AptosPayload = {
        type: "script_function_payload",
        function: `${publisher}::MachikadoNetwork::create_account_store`,
        arguments: [],
        type_arguments: [],
    }
    const tx = await window.aptos!.signAndSubmitTransaction(payload)
    return await waitForTransaction(tx)
}

const toHex = (s: string) => Array.from(new TextEncoder().encode(s)).map(x => x.toString(16)).join("")

export async function createMachikadoAccount(publisher: Address, target: Address, name: string) {
    const payload: AptosPayload = {
        type: "script_function_payload",
        function: `${publisher}::MachikadoNetwork::create_account`,
        arguments: [target, toHex(name)],
        type_arguments: [],
    }
    const tx = await window.aptos!.signAndSubmitTransaction(payload)
    return await waitForTransaction(tx)
}


export async function updateMachikadoAccountName(publisher: Address, target: Address, name: string) {
    const payload: AptosPayload = {
        type: "script_function_payload",
        function: `${publisher}::MachikadoNetwork::update_account_name`,
        arguments: [target, toHex(name)],
        type_arguments: [],
    }
    const tx = await window.aptos!.signAndSubmitTransaction(payload)
    return await waitForTransaction(tx)
}

export async function createTincNode(publisher: Address, target: Address, name: string, publicKey: string) {
    const payload: AptosPayload = {
        type: "script_function_payload",
        function: `${publisher}::MachikadoNetwork::create_node`,
        arguments: [target, toHex(name), toHex(publicKey)],
        type_arguments: [],
    }
    const tx = await window.aptos!.signAndSubmitTransaction(payload)
    return await waitForTransaction(tx)
}